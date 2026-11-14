 function showContent(sectionId) {
    // 获取所有内容容器
    var containers = document.getElementsByClassName('content-container');
    // 隐藏所有内容容器
    for (var i = 0; i < containers.length; i++) {
        containers[i].style.display = 'none';
    }
    // 显示指定的内容容器
    var container = document.getElementById(sectionId + '-container');
    container.style.display = 'block';
}
    window.onload = function() {
        // 显示第一个链接的内容
        showContent('section1');
    };