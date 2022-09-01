import { useId } from "react";

export interface IInputPorps {
    label: string;
    name: string;
    type: "txt" | "password" | "email" | "number"
}

export const Input = ({ label, name, type }: IInputPorps) => {
    const id = useId();
    return (
        <div>
            <label htmlFor={`^${id}-input`}>{label}</label>
            <input type={type} name={name} />
        </div>
    );
};