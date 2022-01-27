import React from "react"
import { MdOutlinePictureAsPdf } from "react-icons/md"

import { Container, IconContainer, Text } from "./style"
import pdfUrl from "../../../assets/files/les-premiers-gestes-pour-affronter-une-situation-de-cyber-harcelement.pdf"

const DownloadGuide = () => {
  return (
    <Container href={pdfUrl} target="_blank">
      <IconContainer>
        <MdOutlinePictureAsPdf />
      </IconContainer>
      <Text>Télécharger le PDF</Text>
    </Container>
  )
}

export default DownloadGuide
