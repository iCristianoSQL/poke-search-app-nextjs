export interface IButton {
    label: string;
    handleClick?: () => void;
    children?: React.ReactNode;
}