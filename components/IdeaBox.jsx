import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React from 'react';
import BoxHeader from './BoxHeader';
import { MoreInfo } from './Info';

const IdeaBox = ({
    title,
    subtitle,
    infoTitle,
    infoContent,
    placeholder,
    name,
    value,
    onChange
  }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
      <Box p="2" m="4" flex="1 1 50%">
        <BoxHeader
          mb="2"
          title={title}
          subtitle={subtitle}
          hasInfo
          onClick={onOpen}
          size={{ titleSize: "2xl", subtitleSize: "sm" }}
        />
        <MoreInfo
          isOpen={isOpen}
          onClose={onClose}
          color="purple"
          infoTitle={infoTitle}
          infoContent={infoContent}
        />
        <Textarea
          value={value}
          name={name}
          onChange={onChange}
          borderRadius="10px"
          size="sm"
          placeholder={placeholder}
        />
      </Box>
    );
  };

export default IdeaBox
