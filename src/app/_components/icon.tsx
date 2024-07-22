import { IoPawSharp } from "react-icons/io5";


interface IconCardProps {
    opacity?: number
}

export function IconCard({ opacity }: IconCardProps) {
    return (
        <>
            <IoPawSharp size={"28px"} color="#CB4817" opacity={opacity}/>
        </>
    )
}