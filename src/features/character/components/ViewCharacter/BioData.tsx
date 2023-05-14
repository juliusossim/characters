import {
	LeftBox,
	ClippedText,
	BorderedText,
} from '@/components/Styles/CharacterPageStyles';
import { FlexCol, FlexRow } from '@/components/Styles/FlexBox';

type BiodataProps = {
	hair: string;
	origin: string;
	mode?: string;
};

export const BioData = ({ hair, origin, mode }: BiodataProps): JSX.Element => {
	const DONT_SHOW = hair.length === 0 && origin.length === 0;

	if (DONT_SHOW) return <></>;

	return (
		<FlexCol>
			<LeftBox>
				<FlexRow>
					<ClippedText size="big" variant={mode}>
						Origin
					</ClippedText>
					<BorderedText size="big">{origin}</BorderedText>
				</FlexRow>
				<FlexRow>
					<ClippedText size="big" variant={mode}>
						Hair Color
					</ClippedText>
					<BorderedText size="big">{hair}</BorderedText>
				</FlexRow>
			</LeftBox>
		</FlexCol>
	);
};
