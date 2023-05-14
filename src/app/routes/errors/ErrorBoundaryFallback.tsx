import { FlexRow } from "@/component/styled/FlexBox"
import { PageWrapper } from "@/component/styled/PageStyles"
import { Typography } from "@/component/styled/Typography"
import { Button } from "@/component/ui/Button"
import { FC } from "react"
import { Link } from "react-router-dom"

export const ErrorBoundaryFallback: FC = () => {

    return(
        <PageWrapper>
            <FlexRow>
            <Typography size="large" variant="primary">OH OH</Typography>
            <Typography  size="big" variant="primary">Some Error Occured!</Typography>


          <Link to='/' >
          <Button>Go Home</Button>
          </Link>

        </FlexRow>
        </PageWrapper>
    )
}