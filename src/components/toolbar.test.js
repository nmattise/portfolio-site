import { render, screen } from "@testing-library/react";
import Toolbar from "./toolbar";

test("renders tools link", async () => {
	render(<Toolbar />);
	const linkElement = screen.getByText(/Tools/i);
	expect(linkElement).toBeInTheDocument();
});
