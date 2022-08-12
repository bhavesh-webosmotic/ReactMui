import React from "react";

import {
  Divider,
  Grid,
  Paper,
  Typography,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableBody,
  Button,
  Card,
  styled,
} from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import VisaImage from "./../assets/visa.png";

const tableHeaders = [
  "INVOICE",
  "BILLING DATE",
  "STATUS",
  "PLAN",
  "AMOUNT",
  "",
];

const tableRows = [
  {
    invoice: "Invoice # 001",
    billingDate: "June 1, 2022",
    status: "Paid",
    plan: "Pro Plan",
    amount: 25,
  },
  {
    invoice: "Invoice # 002",
    billingDate: "June 2, 2022",
    status: "Paid",
    plan: "Pro Plan",
    amount: 25,
  },
];
const StyledPaper = styled(
  Paper,
  {}
)(({ theme }) => {
  return {
    background: theme.palette.background.light,
  };
});

export default function Subscription() {
  return (
    <>
      <Grid container flexDirection={"column"} px={5} my={3}>
        <Typography variant="h5">Subscription</Typography>
        <Typography variant="subtitle2" my={1}>
          Manage your billing information and invoices
        </Typography>

        <Grid item container spacing={2} mt={3}>
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ height: "100%" }}>
              <Grid display={"flex"} flexDirection="column" gap={2} p={2}>
                <Grid container alignItems="center" gap={0.5}>
                  <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                    Pro
                  </Typography>
                  <Grid
                    display={"flex"}
                    alignContent="center"
                    sx={{
                      border: "1px solid #3a7a91",
                      borderRadius: "5px",
                      py: 0.2,
                      px: 0.5,
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{ color: "#4392ae" }}
                      p={0}
                    >
                      Current plan
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="subtitle2">
                  You're the currently on the Pro plan
                </Typography>
                <Divider />
                <Grid
                  display={"flex"}
                  gap={1}
                  alignItems="center"
                  sx={{ cursor: "pointer" }}
                >
                  <Typography variant="subtitle2" sx={{ color: "#de6e16" }}>
                    Upgrade plans
                  </Typography>
                  <ArrowRightAlt sx={{ color: "#de6e16" }} />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card elevation={0} sx={{ height: "100%" }}>
              <Grid display={"flex"} flexDirection="column" gap={2} p={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                  Payment Method
                </Typography>
                <StyledPaper elevation={0}>
                  <Grid
                    container
                    justifyContent={"space-between"}
                    alignItems="center"
                    p={2}
                  >
                    <Grid item display={"flex"} gap={2}>
                      <img src={VisaImage} alt="" width={"45px"} />
                      <Grid display={"flex"} flexDirection={"column"}>
                        <Typography variant="subtitle2">
                          Visa****6546
                        </Typography>
                        <Typography variant="subtitle2">
                          Expiry 03/25
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid my={2}>
                      <Button disableElevation variant="contained">
                        Edit
                      </Button>
                    </Grid>
                  </Grid>
                </StyledPaper>
              </Grid>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={12} my={2}>
          <Card elevation={0}>
            <Grid display={"flex"} flexDirection="column" gap={1} p={2}>
              <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
                Subscription usage
              </Typography>
              <Grid display={"flex"} gap={0.2}>
                <Typography variant="subtitle2">
                  Total logs ingested:
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
                  32917.63 MB
                </Typography>
              </Grid>
              <Grid display={"flex"} gap={0.2}>
                <Typography variant="subtitle2">
                  Total lambda executions:
                </Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
                  1.3 mil
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid my={2}>
        <Divider />
      </Grid>
      <Grid item container px={5}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Past Invoices
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {tableHeaders.map((item, index) => {
                  return <TableCell key={index}>{item}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableRows.map((item, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell>{item.invoice}</TableCell>
                    <TableCell>{item.billingDate}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.plan}</TableCell>
                    <TableCell>${parseFloat(item.amount).toFixed(2)}</TableCell>
                    <TableCell>
                      <Button disableElevation variant="contained">
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}
