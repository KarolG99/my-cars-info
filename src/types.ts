import React from "react";

// FormField
export type IFormField = {
  type?: string;
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

// MainPage
export type InitialFormValuesProps = {
  brand: string;
  model: string;
  year: string;
  oilDate?: string;
  oilKm?: string;
  inspection?: string;
};

export type CarsProps = {
  brand: string;
  model: string;
  year: string;
  oilDate?: string;
  oilKm?: string;
  inspection?: string;
};

