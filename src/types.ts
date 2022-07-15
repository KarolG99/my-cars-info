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
  id: string;
  brand: string;
  model: string;
  year: string;
  oilDate?: string;
  oilKm?: string;
  inspection?: string;
  insuranceEnd?: string;
  handleDeleteCar?: () => void;
};

export type CarsProps = {
  id: string;
  brand: string;
  model: string;
  year: string;
  oilDate?: string;
  oilKm?: string;
  inspection?: string;
  insuranceEnd?: string;
  handleDeleteCar?: () => void;
};
