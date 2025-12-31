import { Control, FieldValues, Path } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface AuthInputProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    type?: string;
    placeholder?: string;
    autoComplete?: string;
}

const AuthInput = <T extends FieldValues>({
    control,
    name,
    label,
    type = "text",
    placeholder,
    autoComplete,
}: AuthInputProps<T>) => (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
                <FormLabel  >{label}</FormLabel>
                <FormControl>
                    <Input
                        placeholder={placeholder}
                        type={type}
                        autoComplete={autoComplete}
                        {...field}
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
);

export default AuthInput;
