import { Link, type LinkProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { Link as ReactRouterLink } from "react-router";

const XLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
    const { href, ...rest } = props;

    return (
        <ReactRouterLink to={href ?? "#"}>
            <Link color={"blue.400"} ref={ref} {...rest} />
        </ReactRouterLink>
    );
});

export default XLink;
