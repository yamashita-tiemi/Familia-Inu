"use client"; // Adiciona essa linha no topo do arquivo

import { useState } from "react";
import { Box, Button, Collapse } from "@chakra-ui/react";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box width="100%">
            <Button
                onClick={() => setIsOpen(!isOpen)}
                bg="#6C722B"
                color="white"
                width="100%"
                textAlign="center"
                justifyContent="center"
                borderRadius="md"
                paddingY={8}
                _hover={{ bg: "#A6AE4F" }}
                fontSize="18px"
            >
                {question}
            </Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                    padding={4}
                    bg="white"
                    color="black"
                    border="1px solid #6C722B"
                    borderRadius="md"
                    bgColor="#6c722b45"
                >
                    {answer}
                </Box>
            </Collapse>
        </Box>
    );
}
