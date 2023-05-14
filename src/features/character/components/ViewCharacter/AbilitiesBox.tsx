import {
	ClippedText,
	StyledCharacterList,
	StyledCharacterListItem,
} from '@/components/Styles/CharacterPageStyles';
import { Typography } from '@/components/Styles/Typography';

type AbilitesProps = {
	abilities: string[];
};
export const AbilitiesBox = ({ abilities }: AbilitesProps): JSX.Element => {
	if (abilities?.length < 1) return <></>;

	return (
		<>
			<ClippedText variant="lightPrimary" size="big">
				Abilities
			</ClippedText>
			<StyledCharacterList>
				{abilities?.map((ability: string) => (
					<StyledCharacterListItem key={ability}>
						{ability}
					</StyledCharacterListItem>
				))}
			</StyledCharacterList>
		</>
	);
};
