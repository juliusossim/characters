import { FC, useCallback, useContext, useEffect } from "react"
import { GqlDataContext } from "../../contexts/GqlDataContextProvider";
import { Link } from "react-router-dom";
import { BoxLayer } from "@/components/Styles/BoxLayer";
import { Card } from "@/components/UI/Card";
import { StyledCard } from "@/components/Styles/StyledCard";
import { FigureBox } from "@/components/UI/FigureBox";
import { AppProviderContext } from "@/providers/providerContex";
import { Typography } from "@/components/Styles/Typography";
import { usePaginate } from "@/hooks/usePaginate";
import { FlexCol, FlexRow } from "@/components/Styles/FlexBox";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { Button } from "@/components/Button";
import { FooterPageWrapper, StyledFooter } from "@/components/Styles/StyledFooter";

export const ListTemp: FC = () => {
    const { data } = useContext(GqlDataContext)


    const { currentItems, currentPage, setCurrentPage, nextPage, previousPage, totalPages } = usePaginate({data: data?.myQuery})
    const {  mode, currentCharacterKeys, setCurrentCharacters, setCurrentCharacterkeys, currentCharacterPage, setCurrentCharacterPage, characterRef } = useContext(AppProviderContext);

    const handleCurrent = (id: number, index: number) => {
        setCurrentCharacterPage(currentPage);
        setCurrentCharacterkeys({ id, index });
    }

    const handleCurrentCharacters = useCallback(
      () => {
        setCurrentCharacters(currentItems);
      },
      [currentPage],
    )
    
    useEffect(() => {
        handleCurrentCharacters()
    }, [currentItems])

    useEffect(() => {
     const scrollToView = () => {
        const listNode = characterRef.current;

        const CharacterNode = listNode.querySelectorAll('a')[currentCharacterKeys.index];
       
          if(CharacterNode){

            CharacterNode.style.scale="135%"
            CharacterNode.style.borderRadius="20px"
            // CharacterNode.style.zIndex=20000
       
           CharacterNode.scrollIntoView({
               behavior: 'smooth',
               block: 'nearest',
               inline: 'center'
             });   
          }
     }
     scrollToView();
    setCurrentPage(currentCharacterPage)

    console.log({currentCharacterKeys, ref: characterRef.current})
    
      return () => {
        currentCharacterKeys
      }
    }, [])
    
    const characters = currentItems;
  
    return <FlexRow ref={characterRef}>
        <FooterPageWrapper>
        <FlexRow>
        {
            characters?.map((character, index) => (
                <Link key={character.id} to={`${character.id}`} className="group" onClick={() => handleCurrent(character.id, index)}>
                    <Card>
                    <StyledCard variant={mode}>
                    <div>
                    <FigureBox uri={character.img_url} alt={`${character.name} image`} />
                    
                    <BoxLayer>
                        <FlexRow>
                        <Typography size="big">
                        
                    {character.name}
                    
                        </Typography>
                    
                            </FlexRow>                    
                    </BoxLayer>
                    </div>
                    </StyledCard>
                    </Card>
                </Link>
            ))
        }
        </FlexRow>
        </FooterPageWrapper>
    <StyledFooter variant={`${mode}Primary`}>
        <Button variant="light" onClick={previousPage}>
            <Typography size="big"><HiOutlineArrowLeft /></Typography>
        </Button>
        <Typography size="small">page {currentPage} of {totalPages}</Typography>
        <Button onClick={nextPage}>
            <Typography size="big"><HiOutlineArrowRight /></Typography>
        </Button>
    </StyledFooter>
    </FlexRow>
};