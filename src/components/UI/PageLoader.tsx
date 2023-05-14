import { config } from "@/config";
import { ErrorContainer as WhiteContainer, PageWrapper } from "../Styles/ErrorStyles";
import { Typography } from "../Styles/Typography";
import { Loader } from "./Loader";

export const PageLoader = (): JSX.Element => (
    <PageWrapper>
        <WhiteContainer>
            {/* <Typography>{config.appName}</Typography> */}
        <Loader text={config.name} />
        </WhiteContainer>
    </PageWrapper>
)