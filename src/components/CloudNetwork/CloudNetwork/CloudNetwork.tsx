import { Accordion, Span } from "@chakra-ui/react";
import { Wrapper } from "./CloudNetwork.styles";
import { CiGlobe } from "react-icons/ci";

const ChakraAccordion = () => {
  return (
    <Accordion.Root collapsible defaultValue={["b"]}>
      <Accordion.Item value="Cloud-network" border="none" p="0" m="0" mt="2">
        <Accordion.ItemTrigger bg="var(--bg-card)" mb="2" p="2">
          <Span bg={"var(--bg-page)"} p={"1"} borderRadius={"5px"}>
            <CiGlobe />
          </Span>
          <Span flex="1" p="0" m="0" fontWeight={"bold"}>Cloud Network</Span>
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger> 
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <Wrapper>
              <div className="item-1">
                <div className="sub-item-1">1</div>
                <div className="sub-item-2">2</div>
                <div className="sub-item-3">3</div>
                <div className="sub-item-4">4</div>
              </div>
              <div className="item-2">2</div>
              <div className="item-3">3</div>
              <div className="item-4">4</div>
            </Wrapper>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default ChakraAccordion;
