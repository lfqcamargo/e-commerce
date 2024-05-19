from fastapi import APIRouter, Depends, Query, status
from typing import List, Optional
from api.modules.users.controller.user_controller import UserController
from api.modules.users.interface.user_interface import UserRequest, UserResponse

router = APIRouter()

@router.post("/", response_model=UserResponse, status_code=status.HTTP_201_CREATED, summary="Create a new user", tags=["users"])
async def create_user(user: UserRequest, user_controller: UserController = Depends()
                    ) -> UserResponse:
    """ Create a new user.

    Args:
        user (UserRequest): The user data to create.
        user_controller (UserController, optional): The user controller. Defaults to Depends().

    Returns:
        UserResponse: The created user.
        
    Raises:
        HTTPException: If the user with the given CPF or email already exists.
        HTTPException: If there is a database transaction error.
    """
    new_user = await user_controller.create_new_user(user.model_dump())
    
    return UserResponse.model_validate(new_user.__dict__)

@router.get("/email/{user_email}", response_model=UserResponse, status_code=status.HTTP_200_OK, summary="Get a user by id", tags=["users"])
async def find_user_by_email(user_email: str, 
                          user_controller: UserController = Depends()
                        ) -> UserResponse:
    """
    Retrieve a user by email.

    Args:
        user_email (str): The email of the user to retrieve.
        user_controller (UserController, optional): The user controller. Defaults to Depends().

    Returns:
        UserResponse: The retrieved user.

    Raises:
        HTTPException: If the user is not found.
    """
    user = await user_controller.get_user_by_email(user_email)
    
    return UserResponse.model_validate(user.__dict__)

@router.get("/{user_id}", response_model=UserResponse, status_code=status.HTTP_200_OK, summary="Get a user by id", tags=["users"])
async def find_user_by_id(user_id: str, user_controller: UserController = Depends()) -> UserResponse:
    """
    Retrieve a user by ID.

    Args:
        user_id (str): The ID of the user to retrieve.
        user_controller (UserController, optional): The user controller. Defaults to Depends().

    Returns:
        UserResponse: The retrieved user.

    Raises:
        HTTPException: If the user is not found.
    """
    user = await user_controller.get_user_by_id(user_id)
    
    return UserResponse.model_validate(user.__dict__)

@router.get("/", response_model=List[UserResponse], status_code=status.HTTP_200_OK, summary="Get a list of users", tags=["users"])
async def find_all_users(skip: int = Query(0, description="Number of records to skip for pagination"),
                         limit: int = Query(10, description="Maximum number of records to return"),
                         active: Optional[bool] = Query(None, description="Filter only active users"),
                         user_controller: UserController = Depends()
                        ) -> List[UserResponse]:
    
    """Retrieve a list of users with pagination.

    Args:
        
        skip (int, optional): Number of records to skip for pagination.
        limit (int, optional): Maximum number of records to return.
        active (Optional[bool], optional): Filter by active users.
        user_controller (UserController, optional): The user controller. Defaults to Depends().

    Returns:
        List[UserResponse]: The list of users.
        
    Raises:
        HTTPException: If no users are found.
    """
    
    users = await user_controller.get_all_users(skip=skip, limit=limit, active=active)     
    
    return [UserResponse.model_validate(user.__dict__) for user in users]