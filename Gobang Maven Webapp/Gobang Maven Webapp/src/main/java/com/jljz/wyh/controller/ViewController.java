package com.jljz.wyh.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ViewController {

    @RequestMapping("/view")
    public ModelAndView view(HttpServletRequest request) {
        String path = request.getParameter("path") + "";
        ModelAndView mav = new ModelAndView();
        String contextPath = request.getContextPath();
        mav.addObject("contextPath", contextPath);
        mav.setViewName(path);
        return mav;
    }

    /**

     * 页面跳转控制器
     * @param target 目标路径(相对地址)
     * @return 
     */
    @RequestMapping("home")
    public ModelAndView gethome(Model model) {
        return new ModelAndView("pages/Home");
    }
}
