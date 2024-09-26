import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Stack } from "@chakra-ui/react";
import { ArticleDaily, ArticleIndexPrimary } from "./article";
import { TitleCard, TitlePage, TitleSection } from "./tittle";
import { Image, ImageFooter } from "./image";
import { CardReview } from "./card";
import { IconCard, IconSocialCard } from "./icon";
import { Text, TextCard } from "./text";
import { FAQItem} from "./FAQItem"; 
import { Button } from "./button";
import { ViewPet, ViewTutor } from "./view";

export function SectionIndexPrimary() {
    return (
        <Stack
            as="section"
            bg={"#6C722B"}
            width={"100%"}
            height={"720px"}
            paddingX={20}
            paddingBottom={10}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"70px"}
        >
            <HStack
                width={"100%"}
                paddingTop={12}
                justifyContent={"space-between"}
            >
                <ArticleIndexPrimary
                    text1={"Bem-vindo à Família Inu!"}
                    text2={"Na Família Inu, oferecemos um lar seguro e acolhedor para o seu pet. Nossa equipe dedicada garante atendimento personalizado, com todo o amor e cuidado. Com profissionais experientes e instalações modernas, seu pet se sentirá em casa, desfrutando de atividades em um ambiente seguro."}
                    text3={"Confie em nós para cuidar do seu pet com carinho e atenção. Nossos espaços confortáveis garantem uma estadia tranquila. Agende agora e garanta o melhor para o seu pet!"}
                />
                <Image src={"/imgIndex.png"} alt={"Vitória e Sayuri"} width={450} height={457} w="100%" align="flex-end"/>
            </HStack>
        </Stack>
    );
}

export function SectionIndexReview() {
    return (
        <Stack
            as="section"
            width={"100%"}
            height={"700px"}
            paddingX={10}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <TitleSection title={"Avaliações"} size={"42px"} />
            <HStack
                width={"90%"}
                paddingTop={12}
                justifyContent={"space-between"}
            >
                <CardReview icon1={<IconCard/>} icon2={<IconCard/>} icon3={<IconCard/>} icon4={<IconCard/>} icon5={<IconCard/>}
                    title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."} 
                />
                <CardReview icon1={<IconCard/>} icon2={<IconCard/>} icon3={<IconCard/>} icon4={<IconCard/>} icon5={<IconCard opacity={0.5}/>}
                    title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."} 
                />
                <CardReview icon1={<IconCard/>} icon2={<IconCard/>} icon3={<IconCard/>} icon4={<IconCard opacity={0.5}/>} icon5={<IconCard opacity={0.5}/>}
                    title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."} 
                />
                <CardReview icon1={<IconCard/>} icon2={<IconCard/>} icon3={<IconCard/>} icon4={<IconCard opacity={0.5}/>} icon5={<IconCard opacity={0.5}/>}
                    title={"Márcia Silva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis ipsum a leo laoreet ultricies eget id urna. Quisque non maximus neque."} 
                />
            </HStack>

        </Stack>
    );
}

export function SectionIndexDaily() { // precisa fazer o carrossel
    return (
        <Stack
            as="section"
            width={"100%"}
            height={"700px"}
            paddingX={10}
            paddingBottom={10}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <TitleSection title={"Um pouco dos nossos dias"} size={"42px"}/>
            <ArticleDaily src={"/daily_photos/sayuri.png"} alt={"Sayuri"} widthImg={1100} heightImg={372} 
                text={"Vivencie a rotina especial do nosso hotel pet, onde cada dia é cheio de carinho, diversão e cuidado. Transformamos momentos simples em experiências inesquecíveis para nossos hóspedes de quatro patas. Venha nos visitar e descubra como tratamos cada pet com amor e dedicação, garantindo conforto e alegria em cada estadia."}
            />
        </Stack>
    );
}

export function SectionAbout() {
    return (
        <Stack
            as="section"
            width={"100%"}
            height={"720px"}
            paddingX={20}
            paddingBottom={10}
            justifyContent={"center"}
            alignItems={"center"}
            paddingTop={"70px"}
        >
            <TitlePage title={"Sobre"} size={"42px"} color={"#FFFFFF"} />
            <HStack
                width={"90%"}
                height={"450px"}
                paddingTop={12}
                justifyContent={"space-between"}
            >
                <Stack
                    bg={"#F2933C"}
                    width={"45%"}
                    height={"100%"}
                    borderRadius={"16px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    paddingX={8}
                >
                    <TitleCard title={"Vitória Alexandre"} size={"32px"} color={""}/>
                    <Text text={"Vitória é uma cuidadora de cachorros dedicada, que oferece carinho e atenção aos animais, garantindo seu bem-estar com responsabilidade e afeto. "} size={"24px"} color={"#FFFFFF"} w={"100%"} />
                </Stack>
                <Stack
                    bg={"#F2933C"}
                    width={"45%"}
                    height={"100%"}
                    borderRadius={"16px"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    paddingX={8}
                >
                    <TitleCard title={"Venha conhecer nosso trabalho!"} size={"28px"} color={"#FFFFFF"} />
                    <TitleCard title={"Entre em contato conosco"} size={"32px"} color={"#FFFFFF"} />
                    <IconSocialCard />
                </Stack>
            </HStack>
        </Stack>
    );
}

export function SectionFAQ() {
    const faqData = [
        {
            question: "Como faço para agendar uma hospedagem para meu pet?",
            answer: "Você pode agendar através do nosso site ou entrar em contato pelo telefone. Teremos prazer em ajudá-lo com todas as informações necessárias.",
        },
        {
            question: "Quais são os horários de check-in e check-out?",
            answer: "O check-in pode ser feito a partir das 8h, e o check-out até às 18h. Caso precise de um horário diferente, entre em contato para verificarmos a disponibilidade.",
        },
        {
            question: "O que está incluído na diária?",
            answer: "A diária inclui alimentação, recreação e acompanhamento veterinário básico. Caso precise de algo específico, oferecemos serviços adicionais.",
        },
        {
            question: "Posso visitar as instalações antes de hospedar meu pet?",
            answer: "Claro! Agende uma visita conosco para conhecer nossas instalações e a equipe que cuidará do seu pet.",
        },
    ];

    return (
        <Stack
            as="section"
            width="100%"
            paddingX={20}
            paddingY={20}
            justifyContent="center"
            alignItems="center"
        >
            <TitlePage title={"Dúvidas Frequentes"} size={"42px"} color={"#CB4817"}/>
            <Stack spacing={4} width="100%" maxWidth="800px" marginTop={8}>
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.question} answer={item.answer} />
                ))}
            </Stack>
        </Stack>
    );
}

export function SectionPerfil() {
    return (
        <HStack
            as="section"
            bg={"#FFFFFF"}
            width={"90%"}
            minHeight={"620px"}
            marginBottom={10}
            marginTop={"70px"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            borderRadius={10}
        >
            <Stack
                height={"100%"}
                width={"85%"}
                alignItems={"center"}
            >
                <HStack
                    width={"100%"}
                    height={"80px"}
                >
                    <Button title={"Tutor"} href={"/"} w="50%"></Button>
                    <Button title={"Pets"} href={"/"} w="50%"></Button>
                </HStack>
                <ViewTutor/>
                {/* <ViewPet/> */}
            </Stack>
            
        </HStack>
    )
}
