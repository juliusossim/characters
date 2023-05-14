
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