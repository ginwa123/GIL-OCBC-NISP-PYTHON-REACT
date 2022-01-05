import {Button, Grid, TextField} from "@mui/material"
import React, {BaseSyntheticEvent, useEffect, useState} from "react"
import {People} from "../models/People"
import {toast} from "react-toastify"

interface Props {
  pButtonListener: (event: People[]) => void
}

export const GInputForm = (props: Props) => {
  const [sPeoples, setPeoples] = useState<People[]>([])
  const [sInput, setInput] = useState<string>("")

  useEffect(() => {
    props.pButtonListener(sPeoples)
  }, [sPeoples])

  const handleAntrikan = () => {
    if (sInput.trim().length <= 0) {
      toast.error("Masukkan nama", {})
      return
    }
    const people: People = {
      name: sInput
    }
    setPeoples(prevPeoples => [people, ...prevPeoples])
    setInput("")
    return
  }

  const handleMajukan = () => {
    setPeoples(prevPeoples => {
      const updatedPeoples = [...prevPeoples]
      updatedPeoples.pop()
      return updatedPeoples
    })

  }


  return (
          <>
            <Grid container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}>
              <Grid item xs={4}>
                <TextField fullWidth size="small" value={sInput}
                           onInput={(e: BaseSyntheticEvent) => setInput(e.target.value)}
                           label="Masukkan nama antrian"/>
              </Grid>
              <Grid item xs={2}>
                <Button fullWidth variant="outlined" size="large" onClick={handleAntrikan}>Antrikan</Button>
              </Grid>
              <Grid item xs={2}>
                <Button fullWidth variant="outlined" size="large" onClick={handleMajukan}>Majukan</Button>
              </Grid>
            </Grid>
          </>
  )
}