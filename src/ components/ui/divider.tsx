import { cn } from "../../lib/utils";
import { useMediaQuery } from "react-responsive";

interface IDivider {
    mobileHeight?: number;
    height?: number;
    mobileWidth?: number | string;
    width?: number | string;
    color?: string;
}

export default function Divider(props: IDivider) {
    const isMobile = useMediaQuery({ maxWidth: 768 }); // Detecta telas menores que 768px

    const height = isMobile ? props.mobileHeight ?? 0 : props.height ?? 0;
    const width = isMobile ? props.mobileWidth ?? 1 : props.width ?? 1;

    return (
        <div
            className={cn(props.color ?? 'bg-purple-800')}
            style={{
                height,
                width,
            }}
        />
    );
}