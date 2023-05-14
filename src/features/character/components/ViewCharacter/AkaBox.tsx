import { LeftBox, BorderedText, ClippedText } from "@/components/Styles/CharacterPageStyles";
import { FlexRow } from "@/components/Styles/FlexBox";

type AkaBoxProps = {
    alias: string[],
    mode?: string
}
export const AkaBox = ({ alias, mode }: AkaBoxProps): JSX.Element => {
    const NO_ALIAS = false
    if (alias?.length < 1) return <></>
   return (
        <FlexRow>
              <LeftBox>
                <ClippedText size="big" variant={mode} >AKA</ClippedText>
                {
                    alias?.map((aka: string) => (
                       <BorderedText key={aka}> {aka}</BorderedText>
                    ))
                }
                </LeftBox>
        </FlexRow>
    )
}