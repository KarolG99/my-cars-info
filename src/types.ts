import React from "react";

// FormField
export type IFormField = {
  type?: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

// MainPage
export type InitialFormValuesProps = {
  brand: string;
  model: string;
  year: string;
};

export type CarsProps = {
  brand: string;
  model: string;
  year: string;
};
