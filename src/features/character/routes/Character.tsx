import { PageLayout } from "@/layout/PageLayout";
import { FC } from "react";
import { redirect, useLoaderData } from "react-router-dom";
import { ViewCharacter } from "../components/ViewCharacter";
import { CharacterDataType } from "../types";


export const Character: FC = () => {
    const character  = useLoaderData()
    
    return (<PageLayout title={character?.name}>
        <ViewCharacter character={character} />
    </PageLayout>)
}