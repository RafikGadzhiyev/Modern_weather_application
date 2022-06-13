import React from "react"
import { DetailContainer } from "./StyledComponents"

export const Detail: React.FC<React.PropsWithChildren> = (props) => {
    return (
        <DetailContainer>
            {props.children}
        </DetailContainer>
    )
}