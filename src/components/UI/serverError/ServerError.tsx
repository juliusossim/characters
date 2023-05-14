import { ErrorContainer, ErrorText, PageWrapper } from "@/components/Styles/ErrorStyles";
import { FlexRow } from "@/components/Styles/FlexBox";
import { Typography } from "@/components/Styles/Typography";

type ServerErrorProps = {
    message: string;
}

export const ServerError = ({ message }: ServerErrorProps) => (
    <PageWrapper>
        <ErrorContainer>
            {/* <FlexRow> */}
            <Typography size="large" variant="primary">
                Encountered Server Error
            </Typography>
        <ErrorText>
            {message}
        </ErrorText>
        <Typography>
                ensure you have an active internet connection
            </Typography>
            {/* </FlexRow> */}
        </ErrorContainer>
    </PageWrapper>
)