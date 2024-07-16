import { DatePk } from "../../../components/DatePicker/DatePicker"
import { Diary } from "../../../components/Diary/Diary"
import { DiaryContainer, DiaryContainerStyled } from "./DiaryPage.style"


export const DiaryPage = () => {
    return(
        <>
        <DiaryContainer>
          <DatePk/>
          <DiaryContainerStyled>
             <Diary/>
          </DiaryContainerStyled>
        </DiaryContainer>
        </>
    )
}