import { render, screen } from "@testing-library/react";
import AccountOverview from "./account-overview";

test("renders support contact information", () => {
  const accountOverviewStub = {
    supportContact: {
      name: "John Smith",
      email: "john.smith@feefo.com",
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    },
  };

  render(<AccountOverview data={accountOverviewStub} />);

  const emailElement = screen.getByText(/john\.smith@feefo\.com/i);
  expect(emailElement).toBeInTheDocument();
});

test("renders sales overview information", () => {
  const accountOverviewStub = {
    supportContact: {
      name: "John Smith",
      email: "john.smith@feefo.com",
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
      lastUploadDate: 1605001226079,
    },
  };

  render(<AccountOverview data={accountOverviewStub} />);

  const uploadsElement = screen.getByText(/8 uploads/i);
  expect(uploadsElement).toBeInTheDocument();
});
