import { type SettingSchema } from './FormCard';
import { type UseFormRegister } from 'react-hook-form';

type SettingsInputProps = {
  label: string;
  defaultValue: string;
  name: keyof SettingSchema;
  register: UseFormRegister<SettingSchema>;
};

const SettingsInput = ({
  label,
  defaultValue,
  name,
  register,
}: SettingsInputProps) => {
  return (
    <div className="mb-2">
      <label className="mb-2 block text-xs font-medium text-slate-500">
        {label}
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="box-border w-full rounded-full border p-2"
        {...register(name)}
      />
    </div>
  );
};

export default SettingsInput;
