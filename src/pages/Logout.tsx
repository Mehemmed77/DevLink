import { Box, Paper} from "@mui/material";
import RsTypography from "../components/ui/RsTypography";
import RsButton from "../components/ui/RsButton";
import { Link } from "react-router-dom";
import FlexBox from "../components/ui/FlexBox";
import MotionDivWrapper from "../components/MotionDivWrapper";

export default function Logout() {
    return <>
        <MotionDivWrapper>
            <Box className="logoutBox">
                <Paper sx={{ width: "100%", maxWidth: "600px", padding:"20px", borderRadius: "20px" }}>
                    <RsTypography lg="34px" xs="24px" fontWeight="bold" text="Are you sure you want to logout" 
                    gutterBottom textAlign={"center"} />

                    <FlexBox>
                        <Link to={""} className="buttonLink">
                            <RsButton text="No" />
                        </Link>

                        <Link to={""} className="buttonLink">
                            <RsButton text="Yes logout" />
                        </Link>
                    </FlexBox>
                </Paper>
            </Box>
        </MotionDivWrapper>
    </>
}