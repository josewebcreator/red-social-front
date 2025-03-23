export const handleLike = (items, setItems, itemId, liked) => {
    const updatedItems = items.map(item => {
        if (item.id === itemId) {
            return {
                ...item,
                likes: liked ? item.likes - 1 : item.likes + 1
            };
        }
        return item;
    });
    setItems(updatedItems);
};
