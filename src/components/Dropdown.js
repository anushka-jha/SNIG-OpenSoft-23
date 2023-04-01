import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ButtonDarkExample() {
    return (
        <>


            <DropdownButton
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Category"
                className="mt-2"
            >
                <Dropdown.Item href="#/action-1" active>Housing</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Travel</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Food</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Utilities</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-5">Medical</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-6">Insurance</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-7">Household Items</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-8">Personal</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-9">Debt</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-10">Retirement</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-11">Education</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-12">Gifts</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-13">Entertainment</Dropdown.Item>
                <Dropdown.Divider />
            </DropdownButton>
        </>
    );
}

export default ButtonDarkExample;