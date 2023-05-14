import { Button } from '@/components/Button';
import {
	CharacterFooter,
	StyledCharacterCard,
	StyledCharacterImage,
	StyledCharacterList,
	StyledCharacterListItem,
	ClippedText,
	BorderedText,
	RightBox,
} from '@/components/Styles/CharacterPageStyles';
import { FlexRow } from '@/components/Styles/FlexBox';
import { Typography } from '@/components/Styles/Typography';
import { AppProviderContext } from '@/providers/providerContex';
import { useContext, FC } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { CharacterDataType } from '../../types';
import { AbilitiesBox } from './AbilitiesBox';
import { AkaBox } from './AkaBox';
import { BioData } from './BioData';

type ViewCharacterProps = {
	character: CharacterDataType;
};

export const ViewCharacter: FC<ViewCharacterProps> = ({
	character,
}: ViewCharacterProps) => {
	const { mode } = useContext(AppProviderContext);
	const { name, status, species, hair, origin, abilities, alias, img_url } =
		character;

	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	return (
		<StyledCharacterCard className="group">
			<Typography size="big" variant="primary">
				{name?.toUpperCase()}
			</Typography>
			<RightBox>
				<Button size="lg" onClick={goBack}>
					<HiArrowLeft />
				</Button>
			</RightBox>

			<StyledCharacterImage srcSet={img_url} alt={name} />

			<FlexRow>
				<ClippedText size="big">Status</ClippedText>
				<BorderedText size="large">{status}</BorderedText>
			</FlexRow>

			<BioData hair={hair} origin={origin} />

			<AbilitiesBox abilities={abilities} />

			<CharacterFooter>
				<AkaBox alias={alias} />

				<RightBox>
					<ClippedText size="big">Species</ClippedText>
					<BorderedText size="big">{species}</BorderedText>
				</RightBox>
			</CharacterFooter>
		</StyledCharacterCard>
	);
};
