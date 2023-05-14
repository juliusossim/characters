import { FlexRow } from "@/component/styled/FlexBox";
import { PageWrapper } from "@/component/styled/PageStyles";
import { Typography } from "@/component/styled/Typography";
import { Button } from "@/component/ui/Button";
import { FC } from "react";
import { useRouteError, Link } from "react-router-dom";

export const ErrorElement: FC = () => {
const error: {[key: string]: string | any} | any = useRouteError();

    return(
        <PageWrapper>
            <FlexRow>
            <Typography size="large" variant="primary">OH OH</Typography>
            <Typography  size="big" variant="primary">Some Error Occured!</Typography>

            <Typography size="small" variant="light"> <i>{error.statusText || error.message}</i></Typography>

          <Link to='/' >
          <Button>Go Home</Button>
          </Link>

        </FlexRow>
        </PageWrapper>
    )
}