import React from "react";
import { ChevronDown } from "lucide-react";

type Option = {
  label: string;
  value: number;
};

type DropdownConfig<T extends string> = {
  readonly key: T;
  readonly placeholder: string;
  readonly options: readonly Option[];
};

type DynamicFormProps<T extends string> = {
  configs: readonly DropdownConfig<T>[];
  formData: Record<T, number>;
  setForm: React.Dispatch<React.SetStateAction<Record<T, number>>>;
  handleSubmit: () => void;
};

export default function DynamicDropdownForm<T extends string>({
  configs,
  formData,
  setForm,
  handleSubmit,
}: DynamicFormProps<T>) {
  const handleChange = (key: T, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: parseInt(value, 10),
    }));
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
        {configs.map((config) => (
          <div key={config.key} className="w-full md:w-64 relative">
            <div className="relative">
              <select
                value={formData[config.key]}
                onChange={(e) => handleChange(config.key, e.target.value)}
                className="brutal-input appearance-none cursor-pointer bg-[var(--brutal-bg)]"
              >
                {config.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="brutal-btn w-full md:w-auto min-w-[200px]"
      >
        Submit
      </button>
    </div>
  );
}
