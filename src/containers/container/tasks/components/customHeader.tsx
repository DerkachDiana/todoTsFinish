import React from 'react';
import { useTranslation } from 'react-i18next';

export const CustomHeader = (): JSX.Element => {
  const [t, i18n] = useTranslation();

  return (
    <div className="header">
      { i18n.t('translation.title') }
    </div>
  );
};
