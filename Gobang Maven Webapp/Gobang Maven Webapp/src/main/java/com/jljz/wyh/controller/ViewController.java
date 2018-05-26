package com.jljz.wyh.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * ViewController 控制层
 * description 页面跳转控制器
 * @data 2018-4-15
 * @author weiyanhui
 *
 */
@Controller
public class ViewController {
    /**
     * 页面跳转控制器 首页
     * @param target 目标路径(相对地址)
     * @return 
     */
    @RequestMapping("home")
    public ModelAndView gethome(Model model) {
        return new ModelAndView("pages/Home");
    }

    /**
     * 页面跳转控制器  人机对战
     * @param target 目标路径(相对地址)
     * @return 
     */
    @RequestMapping("rjdz")
    public ModelAndView rjdy(Model model) {
        return new ModelAndView("pages/dz");
    }

    /**
     * 页面跳转控制器 人人对战
     * @param target 目标路径(相对地址)
     * @return 
     */
    @RequestMapping("rrdz")
    public ModelAndView rrdy(Model model, HttpServletRequest request) {
        request.setAttribute("rrdz", "rrdz");//人人对战标识
        return new ModelAndView("pages/dz");
    }

    /**
     * 页面跳转控制器 介绍
     * @param target 目标路径(相对地址)
     * @return 
     */
    @RequestMapping("Introduce")
    public ModelAndView Introduce(Model model, HttpServletRequest request) {
        return new ModelAndView("pages/Introduce");
    }

    /**
     * 页面跳转控制器 404
     * @param model
     * @return
     */
    @RequestMapping("sls")
    public ModelAndView sls(Model model) {
        return new ModelAndView("Error/404");
    }

    /**
     * 页面跳转控制器 开发中
     * @param model
     * @return
     */
    @RequestMapping("kfz")
    public ModelAndView jsz(Model model) {
        return new ModelAndView("Error/kfz");
    }
}
