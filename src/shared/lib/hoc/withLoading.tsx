import React from 'react';

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<T extends object>(
  WrappedComponent: React.ComponentType<T>
) {
  const ComponentWithLoading: React.FC<T & WithLoadingProps> = ({ isLoading, ...rest }) => {
    if (isLoading) return <div>Загрузка...</div>;
    return <WrappedComponent {...(rest as T)} />;
  };

  return ComponentWithLoading;
}
