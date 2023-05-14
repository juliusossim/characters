import { PageWrapper, WhiteContainer } from "@/component/styled/PageStyles";
import { config } from "@/config";
import { Loader } from "./Loader";

export const PageLoader = (): JSX.Element => (
    <PageWrapper>
        <WhiteContainer>
        <Loader text={config.name} />
        </WhiteContainer>
    </PageWrapper>
)