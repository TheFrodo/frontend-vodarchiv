import { Center, Image } from "@mantine/core";
import React from "react";

const ChannelNoVideosFound = () => {
  return (
    <div>
      <Center>
        Keine Videos gefunden!
        <Image src="/images/Sadge.webp" ml={5} height={19} width={27} />
      </Center>
    </div>
  );
};

export default ChannelNoVideosFound;
