import { cn } from "../../lib/utils"

interface IDivider {
    height?: number
    width?: number | string
    color?: string
}

export default function Divider(props: IDivider) {
    return (
        <div
            className={cn(props.color ?? 'bg-purple-800')}
            style={{
                height: props.height ?? 0,
                width: props.width ?? 1
            }}
        />
    )
}