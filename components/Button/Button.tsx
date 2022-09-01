export interface IButtonProps {
    children: React.ReactNode;
    color: "red" | "blue" | 'purple'
}

export const Button = ({ children, color = "red" }: IButtonProps) => {
    return <button style={{ backgroundColor: color }}>{children}</button>;
};
