import { FormControl, FormLabel, Input, FormHelperText, Stack, HStack } from "@chakra-ui/react";
import { TitleSection } from "./tittle";
import { Label } from "./label";
import { Button } from "./button";

export function ViewTutor() {
    return (
        <Stack
            // bg={"gray"}
            width={"60%"}
            alignItems={"center"}
            marginTop={16}
        >
            <TitleSection title={"Nome"} size={"32px"}/>
            <Stack
                width={"100%"}
            >
                <Label text={"Nome"} content={"teste"}/>
                <Label text={"Email"} content={"teste"}/>
                <Label text={"Telefone"} content={"teste"}/>
                <Label text={"Endereço"} content={"teste"}/>
            </Stack>
            <Stack
                width={"100%"}
                alignItems={"flex-end"}
            >
                <Button title={"Editar"} href={""}></Button>
            </Stack>
        </Stack>
    )
}

export function ViewPet() {
    return (
        <Stack
            width={"60%"}
            alignItems={"center"}
            marginTop={16}
        >
            <Stack
                width={"100%"}
            >
                <TitleSection title={"Nome"} size={"32px"}/>
                <Label text={"Raça"} content={"teste"}/>
                <Label text={"Cor"} content={"teste"}/>
                <Label text={"Porte"} content={"teste"}/>
                <Label text={"Observacões"} content={"teste"}/>
            </Stack>
            <HStack
                width={"100%"}
                justifyContent={"space-between"}
            >
                <Button title={"Novo Pet"} href={""} w="20%"></Button>
                <Button title={"Editar"} href={""}></Button>
            </HStack>
        </Stack>
    )
}