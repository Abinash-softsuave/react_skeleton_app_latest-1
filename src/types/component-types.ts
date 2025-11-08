import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Centralized component prop type definitions
 */

// Button Component
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: ReactNode;
  isLoading?: boolean;
}

// Card Component
export interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
}

// ErrorMessage Component
export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

// Loader Component
export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// MainLayout Component
export interface MainLayoutProps {
  children: ReactNode;
}

// Modal Components
export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
}

export interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'default' | 'danger' | 'warning' | 'info';
}
