import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../lib/validation';
import { useAuthStore } from '../../lib/store';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      // Simulated login - replace with actual API call
      setUser({
        id: '1',
        name: 'John Doe',
        email: data.email,
        bookings: [],
      });
      toast.success('Successfully logged in!');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-text-muted">Email</label>
        <input
          type="email"
          {...register('email')}
          className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-text-muted">Password</label>
        <input
          type="password"
          {...register('password')}
          className="w-full mt-1 px-4 py-2 bg-background border border-gray-700 rounded-md focus:outline-none focus:border-primary text-text"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-4 rounded-md transition-colors"
      >
        Login
      </button>
    </form>
  );
};