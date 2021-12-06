import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar";

test("renders tools link", async () => {
	render(<NavigationBar />);
	const linkElement = screen.getByText(/Tools/i);
	expect(linkElement).toBeInTheDocument();
});
