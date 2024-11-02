import { Sheet } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Divider from "@mui/joy/Divider";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { archetypeList } from "../const/archetypeList";

export const ArchetypeCard = ({
  title,
  formSelectName,
}: {
  title: string;
  formSelectName: string;
}) => (
  <Sheet
    variant="soft"
    sx={{
      width: 400,
      mx: "auto", // margin left & right
      my: 4, // margin top & bottom
      py: 3, // padding top & bottom
      px: 2, // padding left & right
      display: "flex",
      flexDirection: "column",
      gap: 2,
      borderRadius: "sm",
      boxShadow: "md",
    }}
  >
    <Typography sx={{ textAlign: "left" }}>{title}</Typography>
    <Divider />
    <Select name={formSelectName} placeholder="Select your archetype">
      {archetypeList.map((archetype) => (
        <Option key={archetype.name} value={archetype.name}>
          {!archetype.isOrigin && <SubdirectoryArrowRightIcon />}
          {archetype.name}
        </Option>
      ))}
    </Select>
  </Sheet>
);
