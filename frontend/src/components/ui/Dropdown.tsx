import { useState } from "react";
import { submitButtonStyle } from "@/lib/utils";

type Option = {
  label: string;
  value: number;
};

type DropdownConfig<T extends string> = {
  readonly key: T;
  readonly placeholder: string;
  options: readonly Option[];
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <form className="text-center space-y-4">
      {configs.map((config, index) => {
        const selectedLabel =
          config.options.find((o) => o.value === formData[config.key])?.label ??
          config.placeholder;

        return (
          <div key={config.key} className="relative inline-block w-[200px]">
            <div
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="m-2 p-2 rounded-md cursor-pointer
                         bg-[#1a103d] text-purple-200
                         border border-purple-800
                         hover:bg-[#24135c]
                         transition"
            >
              {selectedLabel}
            </div>

            {openIndex === index && (
              <ul
                className="absolute z-10 w-full mt-1 rounded-md
                           bg-[#120a2a] border border-purple-900
                           shadow-lg"
              >
                {config.options.map((option) => (
                  <li
                    key={option.value}
                    onClick={() => {
                      setForm((prev) => ({
                        ...prev,
                        [config.key]: option.value,
                      }));
                      setOpenIndex(null);
                    }}
                    className="px-3 py-2 cursor-pointer
                               text-purple-200
                               hover:bg-purple-800/40"
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}

      <br />

      <button
        type="button"
        onClick={handleSubmit}
        className={submitButtonStyle}
      >
        Submit
      </button>
    </form>
  );
}
