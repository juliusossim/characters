import { FlexRow } from '../Styles/FlexBox';
import { Typography } from '../Styles/Typography';
import { Link, useRouteError } from 'react-router-dom';
import { Button } from '../Button';
import { FC } from 'react';
import { PageWrapper } from '../Styles/ErrorStyles';

export const ErrorElement: FC = () => {
	const error: { [key: string]: string | any } | any = useRouteError();

	return (
		<PageWrapper>
			<FlexRow>
				<Typography size="large" variant="primary">
					OH OH
				</Typography>
				<Typography size="big" variant="primary">
					Some Error Occured!
				</Typography>

				<Typography size="small" variant="light">
					{' '}
					<i>{error.statusText || error.message}</i>
				</Typography>

				<Link to="/">
					<Button>Go Home</Button>
				</Link>
			</FlexRow>
		</PageWrapper>
	);
};
